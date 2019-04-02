@echo off
set CORDOVA_WWW=www\kabaut
set DIST_FOLDER=..\Kabaut.FireTruck\dist

echo Deleting www content...
del /q %CORDOVA_WWW%\*
for /d %%x in (%CORDOVA_WWW%\*) do @rd /s /q "%%x"

xcopy /s/e %DIST_FOLDER% %CORDOVA_WWW%
