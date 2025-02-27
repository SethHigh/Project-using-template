import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import {login, isEmailInUse} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'

const Login = () => {

  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [error, setError] = useState(null);

  const router = useRouter()

  
 //calls upon login and changes the user state
  async function handleLogin(){
      const { user, error } = await login(email, password)
  
      if (error) {
        setError(error)
        console.error('Login error:', error)
        return
      }
  
      setUser(user)
      console.log('Login successful:', user)
  
      router.push('/')
    }
    async function gohome(){
      router.push('/')
    }
    async function gosignup(){
      router.push('/auth/signup')
    }

  return (
    <>

    <Section>
        <Header>Login</Header>
        <InputTitle>Email</InputTitle>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <InputTitle>Password</InputTitle>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>

        <MainButton onClick={handleLogin}>Login</MainButton>
        <MainButton onClick={gosignup}>go sign up</MainButton>
        <MainButton onClick={gohome}>go back</MainButton>

    </Section>
    </>
  )
}

const Section = styled.section`
  background-color: rgb(7, 0, 101);
  padding: 20px;
  color: rgb(4, 183, 223);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Header = styled.h1`
  color: rgb(4, 183, 223);
  font-size: 24px;
  font-weight: bold;
  margin-top: 15%;
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  font-size: 16px;
  background-color: white;
  color: black;
  padding: 10px;
  border: 1px solid rgb(4, 183, 223);
  border-radius: 5px;
  width: 80%;
  margin-bottom: 10px;
  text-align: center;
`;

const InputTitle = styled.label`
  font-size: 14px;
  color: rgb(4, 183, 223);
  margin-bottom: 5px;
`;

const MainButton = styled.button`
  padding: 8px 12px;
  background-color: rgb(4, 183, 223);
  color: rgb(255, 255, 255);
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
  width: 100%;
  max-width: 300px;
  text-align: center;

  &:hover {
    background-color: #411d79;
  }
`;

const UserAgreementText = styled.p`
  font-size: 12px;
  text-align: center;
  color: rgb(4, 183, 223);
  margin-top: 10px;
  width: 80%;
`;

const UserAgreementSpan = styled(Link)`
  color: rgb(4, 183, 223);
  text-decoration: underline;
  cursor: pointer;
`;



export default Login