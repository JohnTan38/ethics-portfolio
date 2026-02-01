@echo off
REM Ethics Portfolio - Quick Setup Script (Windows)
REM This script sets up your project for Vercel deployment

echo.
echo ================================================
echo Ethics Portfolio - Deployment Setup
echo ================================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please run this script from the ethics-portfolio-deploy directory
    pause
    exit /b 1
)

echo [OK] Found package.json
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo [OK] Dependencies installed successfully
echo.

REM Build test
echo Testing build...
call npm run build

if %errorlevel% neq 0 (
    echo ERROR: Build failed - please check errors above
    pause
    exit /b 1
)

echo [OK] Build successful
echo.
echo ================================================
echo Setup Complete!
echo ================================================
echo.
echo Next steps:
echo 1. Install Vercel CLI: npm install -g vercel
echo 2. Deploy to Vercel: vercel --prod
echo.
echo Or push to GitHub and deploy via Vercel dashboard
echo ================================================
echo.
pause
