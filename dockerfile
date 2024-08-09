# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Stage 2: Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build-env /app/out ./

# Expose the port your app runs on. This is optional but recommended
EXPOSE 80

# Set the entry point for the container
ENTRYPOINT ["dotnet", "Backend.dll"]
