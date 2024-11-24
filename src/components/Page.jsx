import List from "./List";
import Header from "./Header";
const Page =()=>{
    return(
        <div>
            <header />
            <main>
                <h1>reasons why am i learning react</h1><List listContent="i love react" />
            <List listContent="react is cool ✌️" />
            <List listContent="well im web developer😎" /></main>
            <footer><small>2024  Shivam development. all rights reserved</small></footer>
            </div>
    )
}

export default Page;