# ETAPA DE CONSTRUCCIÓN (BUILD)
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

# 1. Copiamos el pom.xml que acabas de crear
COPY pom.xml .

# 2. Creamos la carpeta de código (por si se nos olvidó crearla localmente)
RUN mkdir -p src/main/java

# 3. Intentamos compilar (si no hay código, generará un jar básico o saltará)
RUN mvn clean package -DskipTests || echo "Esperando código fuente..."

# ETAPA DE EJECUCIÓN (RUN)
FROM openjdk:17-jdk-slim
WORKDIR /app

# 4. Mensaje de éxito para el entorno
CMD ["echo", "Entorno de Contenedores Java 17 configurado exitosamente por Isaac. Esperando código para desplegar."]