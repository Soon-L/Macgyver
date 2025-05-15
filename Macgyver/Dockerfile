# -------- 빌드 스테이지 --------
FROM gradle:7.6.1-jdk17 AS build
WORKDIR /app
COPY build.gradle settings.gradle ./
COPY src ./src
RUN gradle build --no-daemon -x test

# -------- 실행 스테이지 --------
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# 비루트 사용자 생성 (Cloud Run 권장사항)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# JAR 파일 복사
COPY --from=build --chown=appuser:appgroup /app/build/libs/Macgyver-0.0.1-SNAPSHOT.jar app.jar
USER appuser

EXPOSE 8080
ENV PORT=8080

ENTRYPOINT ["java", "-jar", "app.jar"]