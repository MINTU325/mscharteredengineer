# Start Website Client (Port 3000)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "`$host.ui.RawUI.WindowTitle='Website Client - Port 3000'; Set-Location 'd:\mscharteredEngg\mscharteredengineer\client'; npm run dev"

# Start Website Backend API (Port 5000)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "`$host.ui.RawUI.WindowTitle='Website Backend API - Port 5000'; Set-Location 'd:\mscharteredEngg\mscharteredengineer\server'; node server.js"

# Start WhatsApp CRM Backend (Port 5001)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "`$host.ui.RawUI.WindowTitle='WhatsApp CRM Backend - Port 5001'; Set-Location 'd:\mscharteredEngg\mscharteredengineer\whatsapp-crm-backend'; node server.js"

# Start WhatsApp CRM Frontend (Port 5174)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "`$host.ui.RawUI.WindowTitle='WhatsApp CRM Frontend - Port 5174'; Set-Location 'd:\mscharteredEngg\mscharteredengineer\whatsapp-crm-frontend'; npm run dev"

