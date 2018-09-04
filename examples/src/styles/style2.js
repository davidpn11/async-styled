import styled from 'styled-components'

export const Input = styled.input`
  background-color: white;
  border-radius: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  width: 500px;
  outline: none;
`

export const Button = styled.button`
  background-color: firebrick;
  color: white;
  outline: none;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 50px;
  width: 50px;
  overflow: hidden;
`
