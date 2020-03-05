import React, {useState} from 'react';
import {Page, Navbar, AccordionContent, List, ListItem, Searchbar, Subnavbar, Fab, Icon} from 'framework7-react';
import XLSX from 'xlsx';

export default () => {

  const [contact, setContact] = useState(window.localStorage.getItem("contacts") || []);

  var upload;

  const fileHandler = (event) => {
    if (event != null) {
      var files = event.target.files, f = files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var wb = XLSX.read(data, {type: 'array'});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const result = XLSX.utils.sheet_to_json(ws);

        window.localStorage.setItem("contacts", JSON.stringify(result));

        setContact(result);
      };
      reader.readAsArrayBuffer(f);
    }
  };

  return (
    <Page>
      <Navbar title="Siape">
        <Subnavbar inner={false}>
          <Searchbar
            searchContainer=".search-list"
            searchIn=".item-title"
          />
        </Subnavbar>
      </Navbar>
      <input type="file" onChange={fileHandler} ref={(ref) => upload = ref}
             style={{display: 'none'}}/>

      <Fab position="right-bottom" slot="fixed" color="red" onClick={()=>{upload.click()}}>
        <Icon ios="f7:plus" aurora="f7:plus" md="material:add" />
      </Fab>

      <List className="searchbar-not-found">
        <ListItem title="Nothing found"/>
      </List>
      <List className="search-list searchbar-found">
        {
          contact.map((c, index) => {
            return (
              <ListItem key={index} title={c['Nome']} reloadDetail={true} link={`/${c['CPF']}/`} routeProps={{ customer: c }} />
            );
          })
        }
      </List>
    </Page>
  );
}
