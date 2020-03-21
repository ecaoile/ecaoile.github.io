# Class 03 Reading

1. Why would a developer choose to make data models?
   Data models help ensure that data being passed through adheres to certain formatting. This can prevent errors.

2. What purpose do CRUD operations serve?
   CRUD operations manipulate data.

3. What kind of database is Postgres? What kind of database is MongoDB?
   Progres uses SQL and MongoDB uses NoSQL. The former creates defined tables, and SQL can filter through tables. NoSQL has no defined structure, and it uses IDs for lookup. In practical terms, NoSQL ends up storing data in fat wads of JSON-like objectds. This make read operations pretty easy, but write is a pain.

4. What is Mongoose and why do we need it?
   In addition to increasing your attack speed in some video games, mongoose serves as a translator that converts our JavaScript speak into a language that MongoDB understands. It comes with some validity checks to mimic SQL goodness.

5. Define three related pieces of data in a possible application. An example for a store application might be Product, Category and Department. Describe the contraints and rules on each piece of data and how you would relate these pieces to each other. For example, each Product has a Category and belongs in a Department.
   An example of 3 related pieces of data would be Company, Employee, and Project. The Employees belong to a Company, and Employees can also be assigned to a project. The Project could either belong to the same company, or in the case of vendors, could belong to a separate client (think dirty Microsoft vendors like me).

   Company could look like this:

   ```
   id: { type: String, required: true },
   name: { type: String, required: true },
   teams: { type: Array, valueType: 'String' },
   }
   ```

   It might get messy if you associate projects to a company, so maybe we could leave that out and just have the association be made by looking up employees and their association to projects.

   Employee would be similar:

   ```
   id: { type: String, required: true },
   name: { type: String, required: true },
   nickname: { type: String },
   date_joined: { type: String, required: true },
   projects: { type: Array, valueType: 'String' },
   }
   ```

   Same with Projects:

   ```
   id: { type: String, required: true },
   name: { type: String, required: true },
   members: { type: Array, valueType: 'String' },
   }
   ```

   I'm a little iffy on having members in Projects. It might be unnecessary bloat if we could always just associate project to member adding the project
