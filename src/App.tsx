import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Work } from './layout/sections/work/Work';
import { Skill } from './layout/sections/skill/Skill';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <div className="App">
           <Header/>
           <Main/>
           <Work/>
           <Skill />
           <Footer />
        </div>
    );
}

export default App;

