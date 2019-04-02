@echo off
IF "%~1" == "rebuild" (
call replace_files.bat
)

echo Building APK
@echo on
cordova build android