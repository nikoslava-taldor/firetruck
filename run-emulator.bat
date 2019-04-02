@echo off
IF "%~1" == "rebuild" (
call replace_files.bat
)

echo Runing emulator....
cordova emulate --target=Panasonic_FZ-A2_API_23 android