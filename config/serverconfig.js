var config = {
  default: {
  dbhost : 'localhost',
		dbuser : 'root',
		dbpwd : 'password',
		dbschema : 'autoSum',
		jwtsecret : 'pr1dnya',
		maxinactivity: 1800000,
		loginexpires: '4h',
   timezone: 'utc+05:30',
   dateStrings: true,
    log:{
			directory: "log",
			file: "-results.log",
			level: "debug"
		}
  }
}

exports.get = function get(env){
	return config[env] || config.default;
}
