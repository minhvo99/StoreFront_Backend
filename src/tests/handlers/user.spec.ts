import supertest from 'supertest'
import app from '../..';
const request = supertest(app)
import { token } from "../../middleware/authorization";

const user = {
      id: 1,
      username: 'testUser',
      password_digest: 'password123',
}
const auth = token(user)
describe('Users API ', () => {
      it('/users/create should return a user', () => {
          const data = {
              username: 'test',
              first_name: 'test',
              last_name: 'test',
              password: 'password123',
          }
          request
              .post('/api/users/create')
              .send(data)
              .expect('Content-Type', 'application/json')
              .expect(201)
              .expect({
                  id: 1,
                  username: 'test',
                  first_name: 'test',
                  last_name: 'test',
              })
      })
  
      it('/users/create should fail if required username is not sent', () => {
          const data = {
              first_name: 'test',
              last_name: 'test',
              password: 'password123',
          }
          request
              .post('/api/users/create')
              .set('Authorization', `Bearer ${auth}`)
              .send(data)
              .expect('Content-Type', 'application/json')
              .expect(400)
              .expect({
                  error: 'Missing username or password',
              })
      })
  
      it('/users/create should fail if required password is not sent', () => {
          const data = {
              username: 'test',
              first_name: 'test',
              last_name: 'test',
          }
          request
              .post('/api/users/create')
              .set('Authorization', `Bearer ${auth}`)
              .send(data)
              .expect('Content-Type', 'application/json')
              .expect(400)
              .expect({
                  error: 'Missing username or password',
              })
      })
  
      it('/users should return all users', () => {
          request
              .get('/api/users')
              .set('Authorization', `Bearer ${auth}`)
              .expect(200)
              .expect('Content-Type', 'application/json')
              .expect([
                  {
                      id: 1,
                      username: 'test',
                      first_name: 'test',
                      last_name: 'test',
                  },
              ])
      })
  
      it('/users/:id should show a user', () => {
          request
              .get('/api/users/1')
              .set('Authorization', `Bearer ${auth}`)
              .expect('Content-Type', 'application/json')
              .expect(200)
              .expect({
                  id: 1,
                  first_name: 'test',
                  last_name: 'test',
                  password_digest: 'password123',
              })
      })
  
      it('/users/:id should update a user', () => {
          const data = {
              username: 'madison',
              first_name: 'Madison',
              last_name: 'Smith',
              password_digest: 'password123',
          }
          request
              .put('/api/users/1')
              .set('Authorization', `Bearer ${auth}`)
              .send(data)
              .expect('Content-Type', 'application/json')
              .expect('Content-Type', /json/)
              .expect(200)
              .expect({
                  id: 1,
                  username: 'madison',
                  first_name: 'Madison',
                  last_name: 'Smith',
                  password_digest: 'password123',
              })
      })
  
      it('/users/:id should delete a user', () => {
          request.delete('/api/users/1').expect(200).expect({
              status: 'Deleted user 1',
          })
      })
  })
