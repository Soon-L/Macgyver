# 빌드 스테이지
FROM gradle:7.6.1-jdk17 AS build
WORKDIR /app
COPY build.gradle settings.gradle ./
COPY src ./src
RUN gradle build --no-daemon -x test

# 실행 스테이지
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# 비루트 사용자 추가 (Cloud Run 보안 권장사항)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=build --chown=appuser:appgroup /app/build/libs/*.jar app.jar
USER appuser
# Cloud Run은 포트를 환경 변수 PORT로 설정 (기본 8080)
EXPOSE 8080
ENV PORT=8080
ENTRYPOINT ["java", "-jar", "app.jar"]