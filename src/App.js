 import React, { useState} from 'react';

 import moment from 'moment';

 import { sha256 } from

 'crypto-hash';

 function Library() { const [files, setFiles] =

 useState({}); const [activeProjects,

 setActiveProjects] = useState([]); const [projects, setProjects]

 =

 useState([]);

 const [ideas, setIdeas] = useState({});

 const [access, setAccess] = useState({ admin: 'password' }); 

 const [loggedIn, setLoggedIn] = useState(false);

 