@echo off
cd /d "C:\Users\samue\OneDrive\Desktop\Capolavoro_Lembo_Samuele"
start /b node app.js

cd /d "C:\Users\samue\OneDrive\Desktop\Capolavoro_Lembo_Samuele\Rolexlandia\Binaries"
start /b node ServerWeb.js

cd /d "C:\Users\samue\OneDrive\Desktop\Capolavoro_Lembo_Samuele\Sami_News"
start /b node server.js

cd /d "C:\Users\samue\OneDrive\Desktop\Capolavoro_Lembo_Samuele\Flexbox"
start /b node server.js

cd /d "C:\Users\samue\OneDrive\Desktop\Capolavoro_Lembo_Samuele\Pagina Web Dinamica"
start /b node server.js

echo Applicazione web avviata correttamente!
exit
