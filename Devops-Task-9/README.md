
# Elevate-Labs-Devops-Internship
Jan- DevOps Internship-2026

# Task 9: Docker Basics – Containerizing an Application

## 📋 Task Overview
This repository demonstrates the containerization of a Node.js Express web application using Docker. The task covers Docker fundamentals including building images, running containers, port mapping, and container lifecycle management.

## 🛠 Tools Used
- **Docker** - Primary containerization platform
- **Node.js 18 Alpine** - Base image for lightweight containerization
- **Express.js** - Web application framework

## 📁 Project Structure
```
Docker-tutorial-app/
├── Dockerfile           # Docker image configuration
├── .dockerignore        # Files to exclude from Docker context
├── server.js            # Express.js server application
├── package.json         # Node.js dependencies
├── package-lock.json    # Locked dependencies
└── public/              # Static web files
    ├── index.html       # Main HTML page
    ├── script.js        # Client-side JavaScript
    └── style.css        # Styling
```

## 🐳 Dockerfile Explanation

```dockerfile
# 1. Use official Node.js base image
FROM node:18-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the application
COPY . .

# 6. Expose application port
EXPOSE 3000

# 7. Start the application
CMD ["node", "server.js"]
```

### Dockerfile Breakdown:
1. **FROM node:18-alpine**: Uses lightweight Alpine Linux-based Node.js image (smaller size, faster builds)
2. **WORKDIR /app**: Sets working directory to `/app` inside the container
3. **COPY package*.json ./**: Copies package.json and package-lock.json for dependency installation
4. **RUN npm install**: Installs Node.js dependencies defined in package.json
5. **COPY . .**: Copies all application files into the container
6. **EXPOSE 3000**: Documents that the container listens on port 3000
7. **CMD ["node", "server.js"]**: Defines the command to run when container starts

## 🚀 Commands Used

### 1. Build Docker Image
```bash
docker build -t docker-tutorial-app .
```
- `-t docker-tutorial-app`: Tags the image with name "docker-tutorial-app"
- `.`: Specifies current directory as build context

### 2. Run Docker Container
```bash
docker run -d -p 3000:3000 --name my-app-container docker-tutorial-app
```
- `-d`: Runs container in detached mode (background)
- `-p 3000:3000`: Maps host port 3000 to container port 3000
- `--name my-app-container`: Names the container for easy reference
- `docker-tutorial-app`: Specifies the image to use

### 3. View Running Containers
```bash
docker ps
```
Shows all currently running containers with details like:
- Container ID
- Image name
- Command
- Status
- Ports
- Names

### 4. View All Containers (Including Stopped)
```bash
docker ps -a
```

### 5. View Container Logs
```bash
docker logs my-app-container
```
Shows console output from the application running inside the container

### 6. View Real-time Logs
```bash
docker logs -f my-app-container
```
- `-f`: Follows log output in real-time

### 7. Inspect Container
```bash
docker inspect my-app-container
```
Returns detailed JSON information about the container configuration

### 8. Execute Commands in Running Container
```bash
docker exec -it my-app-container /bin/sh
```
- `-it`: Interactive terminal
- `/bin/sh`: Opens shell inside container

### 9. Stop Container
```bash
docker stop my-app-container
```
Gracefully stops the running container

### 10. Start Stopped Container
```bash
docker start my-app-container
```

### 11. Remove Container
```bash
docker rm my-app-container
```
Deletes the stopped container

### 12. Force Remove Running Container
```bash
docker rm -f my-app-container
```
- `-f`: Forces removal even if container is running

### 13. View Docker Images
```bash
docker images
```
Lists all Docker images on the system

### 14. Remove Docker Image
```bash
docker rmi docker-tutorial-app
```
Deletes the specified image

### 15. Force Remove Image
```bash
docker rmi -f docker-tutorial-app
```

### 16. Remove Unused Images
```bash
docker image prune
```

### 17. Complete Cleanup
```bash
# Stop all running containers
docker stop $(docker ps -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all images
docker rmi $(docker images -q)

# Remove unused data
docker system prune -a
```

## 🔄 Image Lifecycle

### Build Stage
1. **Context Preparation**: Docker collects files from build context
2. **Layer Creation**: Each Dockerfile instruction creates a new layer
3. **Caching**: Docker caches layers for faster subsequent builds
4. **Image Creation**: Final image is tagged and stored locally

### Runtime Stage
1. **Image Pull/Load**: Docker loads the image
2. **Container Creation**: Creates a writable container layer
3. **Process Start**: Executes CMD instruction
4. **Running State**: Container runs until process exits or stopped

### Cleanup Stage
1. **Stop**: Gracefully stops the container process
2. **Remove Container**: Deletes container but keeps image
3. **Remove Image**: Deletes image layers from local storage

## 📊 Verification Steps

### 1. Verify Docker Installation
```bash
docker version
docker info
```

### 2. Build Success
```bash
docker images | grep docker-tutorial-app
```
Expected output: Image with tag "latest" and size info

### 3. Container Running
```bash
docker ps | grep my-app-container
```
Expected output: Container with status "Up" and port mapping

### 4. Application Accessible
```bash
curl http://localhost:3000
```
Or open browser: `http://localhost:3000`

### 5. Logs Verification
```bash
docker logs my-app-container
```
Expected output:
```
🚀 Starting Express server...
✅ Server is RUNNING at http://localhost:3000
```

## 📸 Screenshots Included

1. **Docker Build Output** - Shows successful image creation
2. **Docker Images List** - Displays the built image
3. **Docker Run Output** - Container starting in background
4. **Docker PS Output** - Running container with port mapping
5. **Application in Browser** - Web app running successfully
6. **Docker Logs** - Container console output
7. **Docker Stop & Remove** - Cleanup commands

## ❓ Interview Questions & Answers

### 1. What is Docker?
Docker is an open-source platform that enables developers to automate the deployment, scaling, and management of applications using containerization. It packages applications and their dependencies into standardized units called containers, which can run consistently across different computing environments.

**Key Features:**
- Lightweight virtualization
- Portable and consistent environments
- Fast deployment and scaling
- Resource efficient

### 2. Image vs Container

**Docker Image:**
- **Definition**: Read-only template containing application code, libraries, and dependencies
- **Nature**: Immutable (doesn't change)
- **Storage**: Stored on disk
- **Layers**: Built from multiple layers using Dockerfile
- **Purpose**: Blueprint for creating containers
- **Example**: `node:18-alpine`, `docker-tutorial-app:latest`

**Docker Container:**
- **Definition**: Running instance of a Docker image
- **Nature**: Mutable (has writable layer)
- **Storage**: Runs in memory
- **Lifecycle**: Can be started, stopped, restarted, deleted
- **Purpose**: Actual execution environment for applications
- **Example**: `my-app-container` running from `docker-tutorial-app` image

**Analogy:**
- Image = Class (blueprint)
- Container = Object (instance of class)

### 3. What is Dockerfile?
A Dockerfile is a text file containing a series of instructions and commands used to build a Docker image. It defines:
- Base image to use
- Dependencies to install
- Files to copy
- Ports to expose
- Commands to run

**Common Instructions:**
- `FROM`: Base image
- `WORKDIR`: Working directory
- `COPY`: Copy files from host to container
- `RUN`: Execute commands during build
- `EXPOSE`: Document port usage
- `CMD`: Default command when container starts
- `ENV`: Set environment variables
- `ENTRYPOINT`: Configure container as executable

### 4. Why Containers are Used?

**Benefits:**

1. **Consistency**: "Works on my machine" problem solved - same environment everywhere
2. **Isolation**: Applications run independently without conflicts
3. **Portability**: Run anywhere - dev laptop, test server, cloud
4. **Resource Efficiency**: Lightweight compared to VMs, share host OS kernel
5. **Fast Startup**: Containers start in seconds vs minutes for VMs
6. **Scalability**: Easy to scale horizontally by running multiple containers
7. **Version Control**: Image versions track application states
8. **Microservices**: Perfect for microservices architecture
9. **DevOps**: Facilitates CI/CD pipelines
10. **Cost Effective**: Better resource utilization, lower infrastructure costs

**Use Cases:**
- Web application deployment
- Microservices architecture
- Development environments
- Testing and QA
- Continuous Integration/Continuous Deployment (CI/CD)
- Multi-cloud deployments

### 5. How Ports are Exposed?

**Port Mapping Concept:**
Containers have their own network stack. Port mapping connects container ports to host machine ports, making services accessible externally.

**Methods:**

1. **In Dockerfile (Documentation Only):**
```dockerfile
EXPOSE 3000
```
- Documents which port the application uses
- Doesn't actually publish the port
- Used by `docker run -P` for automatic mapping

2. **At Runtime (Actual Mapping):**
```bash
docker run -p 3000:3000 my-app
```
- `-p HOST_PORT:CONTAINER_PORT`
- Maps host port 3000 to container port 3000
- Now accessible at `http://localhost:3000`

3. **Multiple Ports:**
```bash
docker run -p 3000:3000 -p 8080:8080 my-app
```

4. **Different Host Port:**
```bash
docker run -p 8080:3000 my-app
```
- Container port 3000 accessible on host port 8080
- Access at `http://localhost:8080`

5. **All Interfaces:**
```bash
docker run -p 0.0.0.0:3000:3000 my-app
```
- Binds to all network interfaces

6. **Random Host Port:**
```bash
docker run -P my-app
```
- `-P`: Publishes all EXPOSED ports to random high ports
- Use `docker port` to see mapping

**Port Check:**
```bash
docker port my-app-container
# Output: 3000/tcp -> 0.0.0.0:3000
```

## ✅ Task Completion Summary

This task successfully demonstrated:
1. ✅ Docker installation and verification
2. ✅ Creating a simple Node.js Express application
3. ✅ Writing a well-structured Dockerfile
4. ✅ Building Docker image with proper tagging
5. ✅ Running container with port mapping
6. ✅ Inspecting container logs and status
7. ✅ Stopping and removing containers
8. ✅ Cleaning up images and containers
9. ✅ Understanding image lifecycle
10. ✅ Documenting all steps and concepts

## 🎓 Key Learnings

1. **Docker Architecture**: Understanding image layers, containers, and Docker daemon
2. **Dockerfile Best Practices**: Using Alpine images, proper layer ordering, .dockerignore
3. **Container Management**: Starting, stopping, removing containers
4. **Port Mapping**: Exposing services from containers to host
5. **Logging & Debugging**: Viewing logs and inspecting containers
6. **Cleanup**: Proper resource management and cleanup procedures
7. **Image Optimization**: Layer caching and minimal image size

## 🔗 Resources

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Dockerfile Best Practices](https://docs.docker.com/develop/dev-best-practices/)

