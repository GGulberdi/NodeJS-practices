// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const should = chai.should()// The result should be .......
// const server = require('../../app');
// chai.use(chaiHttp)

// let token;
// describe('TEst For /api/movies Endpoints', ()=>{
//     before((done)=>{
//         //=>/users/authenticate
//         chai.request(server)
//         .post('/api/users/authenticate')
//         .send({uasername:'Muhammettttttt', password:12345})
//         .end((err,res)=>{
//             token= (res.body.token)
//             console.log(token)
//             done()
//         })
// done();
//     })
//     describe('Second step',()=>{
//         it('It should get second', (done)=>{
//             done()
//         })
//     })
   
    


// })


//Zerrin
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should() //The result should be ...

const server = require('../../app')
chai.use(chaiHttp)

let token;
describe("Test For /api/movies EndPoints",()=>{
  before((done)=>{
    // localhost:3000/users/authenticate
    chai.request(server)
    .post('/users/authenticate')
    .send({username:'Zerrine',password:'12345'})
    .end((err,res)=>{
        token = res.body.token;
        // console.log(token);
        done();
      })
   })
   describe("GET Movies",()=>{
    it('It should GET all the movies',(done)=>{
        chai.request(server)
                .get('/api/movies')
                .set('x-access-token',token)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
       })
     })
   }) 
   describe('POST Movies', ()=>{
    it('It should POST a movie',(done)=>{
      const myMovie={
          title:'Fight Club',
          director_id:'603c1f5c77bdde8af70ddd35',
          category:'Drama',
          country:'USA',
          year:1999,
          imdb_score:8.8
      };
      chai.request(server)
              .post('/api/movies')
              .set('x-access-token',token)
              .send(myMovie)
              .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('director_id');
                res.body.should.have.property('category');
                res.body.should.have.property('country');
                res.body.should.have.property('year');
                res.body.should.have.property('imdb_score');
                myMovieId=res.body._id;
                done();
              })
            })
   })

   //GET=> /api/movies/:movieId
   describe('GET /api/movies/:MovieId',()=>{
    it('It should GET a movies by the given id',(done)=>{
      chai.request(server)
      .get('/api/movies/' + myMovieId)
      .set('x-access-token', token)
      .end((err,res)=>{                            
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('title');
              res.body.should.have.property('director_id');
              res.body.should.have.property('category');
              res.body.should.have.property('country');
              res.body.should.have.property('year');
              res.body.should.have.property('imdb_score');
              res.body.should.have.property('_id').eql(myMovieId);
          done();
      })
    })
  })

  //PUT=>/api/movies/:movieId -> Update a new Movies?
  describe('UPDATE(PUT) Movies',()=>{
    it('It should UPDATE(PUT) a movie',(done)=>{
        const myMovie={
            title:'Fight Club New',
            director_id:'603c1f5c77bdde8af70ddd35',
            category:'Drama New',
            country:'USA New',
            year:1999,
            imdb_score:8.8
        };
        chai.request(server)
                .put('/api/movies/' + myMovieId)
                .set('x-access-token',token)
                .send(myMovie)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title').eql(myMovie.title);
                    res.body.should.have.property('director_id').eql(myMovie.director_id);
                    res.body.should.have.property('category').eql(myMovie.category);
                    res.body.should.have.property('country').eql(myMovie.country);
                    res.body.should.have.property('year').eql(myMovie.year);
                    res.body.should.have.property('imdb_score').eql(myMovie.imdb_score);
                    done();
                })
              })
    })

    //DELETE=> /api/movies/:movieId
    describe('DELETE /api/movies/:MovieId',()=>{
      it('It should DELETE a movies by the given id',(done)=>{
              chai.request(server)
                      .delete('/api/movies/' + myMovieId)
                      .set('x-access-token', token)
                      .end((err,res)=>{                            
                              res.should.have.status(200);
                              res.body.should.be.a('object');
                          done();
                      })
      })
  })
})