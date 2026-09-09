# Base image (OS)

FROM eclipse-temurin:17-jdk-alpine

#Working directory for app
WORKDIR /app

# Copy the code from your HOST to your container (working dir)
COPY src/Calculator.java /app/Calculator.java

COPY src/SimpleServer.java /app/SimpleServer.java

# Run commands to install libs or to compile code

RUN javac Calculator.java

RUN javac SimpleServer.java

# Expose the port

EXPOSE 8000

# Serve the app / Keep it running
CMD ["java","SimpleServer"]
