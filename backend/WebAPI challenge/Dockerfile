FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal AS base
WORKDIR /app
EXPOSE 44324

ENV ASPNETCORE URLS=http://+:44324
ENV PATH="$PATH:C:\Program Files\dotnet"

FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /src
COPY ["WebAPI challenge.csproj", "./"]
RUN dotnet restore "WebAPI challenge.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "WebAPI challenge.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "WebAPI challenge.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WebAPI_challenge.dll"]