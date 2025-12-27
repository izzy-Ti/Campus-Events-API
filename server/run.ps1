$mavenVersion = "3.9.6"
$mavenUrl = "https://archive.apache.org/dist/maven/maven-3/$mavenVersion/binaries/apache-maven-$mavenVersion-bin.zip"
$targetDir = "$PSScriptRoot\.maven"
$mavenBin = "$targetDir\apache-maven-$mavenVersion\bin\mvn.cmd"

if (-not (Test-Path $mavenBin)) {
    Write-Host "Maven not found. Downloading Maven $mavenVersion..." -ForegroundColor Cyan
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
    Invoke-WebRequest -Uri $mavenUrl -OutFile "$targetDir\maven.zip"
    Expand-Archive -Path "$targetDir\maven.zip" -DestinationPath $targetDir -Force
    Remove-Item "$targetDir\maven.zip"
}

Write-Host "Starting Campus Events API via Jetty..." -ForegroundColor Green
& $mavenBin jetty:run
