db.createUser({
    user: 'sami',
    pwd: 'sami',
    roles: [
      {
        role: 'dbOwner',
        db: 'messagerieDB'
      }
    ]
  })

  //doc : https://stackoverflow.com/questions/57818697/how-to-initialize-a-new-user-and-database-for-mongodb-on-docker-compose
  //roles : https://www.mongodb.com/docs/manual/reference/built-in-roles/