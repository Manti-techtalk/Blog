import React,{useState} from 'react'
import ArticleCard from './ArticleCard'

function ArticleBody() {
    const [search,setSearch] = useState('')
  return (
    <div className="container-fluid mt-5">
        <div className="container justify-content-start align-items-center">
            <div className="row p-3">
                <div className="col-8">
                    <input 
                    style={{width:'100%'}}
                    className='form form-control-lg'
                    placeholder='search articles'
                     type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </div>
                <div className="col-4">
                    <button className='form form-control'>
                       <span><i class="fa-solid fa-filter"></i></span> Filter by Category
                    </button>
                </div>
            </div>
            <div className="row">
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </div>
        </div>
    </div>
  )
}

export default ArticleBody