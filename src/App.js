import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import createHistory from 'history/createBrowserHistory';
import firebase from 'firebase';
import { MuiThemeProvider } from '@material-ui/core/styles';

import {FirebaseDataProvider} from 'ra-data-firebase'
import {FirebaseAuthProvider} from 'ra-auth-firebase'

import firebaseConfig from './config/firebase'
import providerConfig from './config/data-provider'
import theme from './config/theme'

// Sections
import Login from './login'

import Dashboard from './dashboard'

import TodosIcon from '@material-ui/icons/DoneAll';
import { TodosCreate, TodosEdit, TodosList} from './todos'

import NotesIcon from '@material-ui/icons/Note';
import { NotesCreate, NotesEdit, NotesList} from './notes'

import BookmarksIcon from '@material-ui/icons/Bookmark';
import { BookmarksCreate, BookmarksEdit, BookmarksList} from './bookmarks'

// HACK: - Get proper theme applied to Login
const LoginPage = (props) => <MuiThemeProvider theme={theme}>
  <Login title="{mebin}" {...props} />
</MuiThemeProvider>

const history = createHistory();

firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {

    return <Admin
      history={history}
      title="{mebin}"
      theme={theme}
      loginPage={LoginPage}
      dashboard={Dashboard}
      authProvider={FirebaseAuthProvider()} dataProvider={FirebaseDataProvider(providerConfig)}
    >

      <Resource
        icon={TodosIcon}
        options={{ label: 'TODOs' }}
        name="todos"
        list={TodosList}
        edit={TodosEdit}
        create={TodosCreate}
      />

      <Resource
        icon={NotesIcon}
        options={{ label: 'Notes' }}
        name="notes"
        list={NotesList}
        edit={NotesEdit}
        create={NotesCreate}
      />

      <Resource
        icon={BookmarksIcon}
        options={{ label: 'Bookmarks' }}
        name="bookmarks"
        list={BookmarksList}
        edit={BookmarksEdit}
        create={BookmarksCreate}
      />

    </Admin>;
  }
}

export default App;