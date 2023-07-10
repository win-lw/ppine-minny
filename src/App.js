import './App.css';
import AppHeader from './components/AppHeader';
import CattyItem from './components/Cattyitem';
import CattyPost from './components/CattyPost';
import cattys from './data/cattys';
import React, { useState } from "react";
import Appsearch from './components/Appsearch';



function App() {

  const [selectedCatty, setSelectedCatty] = useState(null);
  const [searchText, setSearchText ] = useState('');

  function onCattyOpenClick(theCatty){
    setSelectedCatty(theCatty);
  }

  function onCattyCloseClick() {
    setSelectedCatty(null);
  }


  //สร้างelementเพื่อเก็บข้อมูลcomponentทั้งหมดของReact
  const cattyElements = cattys.filter((catty) => {
        return catty.name.includes(searchText);
  }).map((catty, index) => {
    return <CattyItem key={index} catty={catty} onCattyClick={onCattyOpenClick} />
  });

  let cattyPost = null;
  if (!!selectedCatty){
    cattyPost = <CattyPost catty={selectedCatty}  onBgClick={onCattyCloseClick}  />
  }


  return (
    <div className="app">
      <AppHeader />
     <section className="app-section">
       <div className ="app-container">
          <Appsearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">
            {cattyElements}
          </div>
       </div>
     </section>
      {cattyPost}
    </div>
  );
}

export default App;
