import React from 'react'

const Rest = ({ menudata }) => {
  
  return (
      <>
      <section className="main-card--cointainer">
      {menudata.map((curElem)=>{  //curElem me sari value store ho jayegii
        //curElem={name, category, discription, image, price}--this is called distructuring ham sabhi tag me se {curElem.} ko hata saktey hain sirf {id} reh jayega
          return(
               <>                                      {/*👇jab bhii koi map define kartey hain tou key pass karna hota hai, value store ho jayegii esme*/}
                <div className="card-container" key={curElem.id}>
                    <div className="card">
                      <div className="card-body">                          {/*👇aisa karne se sabhi jagah value Api k according change ho jayegii--props, otherwise same rahega */}
                        <span className='card-number card-circle subtle'>{curElem.id}</span>
                        <span className="card-auther subtle">{curElem.category}</span>
                        <h2 className="card-title ">{curElem.name}</h2>
                        <span className="card-description subtle">
                            I love Maggi Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor architecto non illum rerum corrupti debitis autem? Sunt voluptatibus temporibus mollitia odio, ab numquam accusamus, eos molestias, adipisci dignissimos fugiat.
                        </span>
                        <div className="card-read">Read</div>
                      </div>
                  <img src={curElem.image} alt="image" className='card-media' />
                  <span className="card-tag subtle">Order Now</span>

                    </div>
                </div>
    
              </>
    
          )
      })}
      </section>
      
      
    
      </>
    
  )
}

export default Rest
