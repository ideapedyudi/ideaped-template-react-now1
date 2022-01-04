const DBName = process.env.DBName;
const DBHost = process.env.DBHost;
const DBUser = process.env.DBUser;
const DBPass = '';
const DBDialect = process.env.DBDialect;
const DefTimeZone = process.env.DefTimeZone;
const BindIP = process.env.BindIP;
const BindPort = process.env.BindPort;

module.exports = { DBName, DBHost, DBUser, DBPass, DBDialect, DefTimeZone, BindIP, BindPort }