import React, { useReducer, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import reducer from './reducer'

const initialState = {
  page: 0,
  followers: [],
}
function App() {
  const {loading, data} = useFetch();
  const [state, dispatch] = useReducer(reducer, initialState)
  

  useEffect(()=> {
    if(loading) return;
    dispatch({ type: 'FETCH_FOLLOWERS', payload: data[state.page] })
  },[loading, state.page, data])
const handleClick =(index)=> {
  dispatch({type: 'SET_PAGE', payload: index})
}

const prevPage =()=> {
  let newPage = state.page - 1;
  if(newPage < 0) {
    newPage = data.length -1;
  }

  dispatch({type: 'PREV_PAGE', payload: newPage})
}
const nextPage =()=> {
  let newPage = state.page +1;
  if(newPage > data.length -1) {
    newPage =0
  }
  dispatch({type: 'NEXT_PAGE', payload: newPage})
}

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {state.followers.map((item) => {
            const { id } = item
            return <Follower key={id} {...item} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button onClick={prevPage} className='prev-btn'>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`page-btn ${state.page === index && 'active-btn'}`}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
