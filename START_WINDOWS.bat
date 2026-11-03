@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo DentaCare Turkiye - Expo baslatiliyor...
where node >nul 2>nul || (echo Node.js bulunamadi. & pause & exit /b 1)
if not exist "node_modules" (call npm install || (echo Bagimliliklar yuklenemedi. & pause & exit /b 1))
call npx expo start --clear
pause
