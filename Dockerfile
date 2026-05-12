# ETAPA DE CONSTRUCCIÓN (BUILD)
# Usamos una imagen de Maven con Java 17 para compilar el código
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
# Este comando crea el archivo .jar (tu app compilada) saltándose los tests para ir más rápido
RUN mvn clean package -DskipTests

# ETAPA DE EJECUCIÓN (RUN)
# Ya no necesitamos Maven, solo Java para correr el .jar
FROM openjdk:17-jdk-slim
WORKDIR /app
# Traemos el archivo compilado desde la etapa anterior
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]