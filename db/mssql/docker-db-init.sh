#wait for the SQL Server to come up
sleep 30s

echo "running set up script"
#run the setup script to create the DB and the schema in the DB
/opt/mssql-tools/bin/sqlcmd -S sql-server-db -U sa -P Mysql!Server02 -d master -i db-init.sql