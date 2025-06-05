import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Dash from './pages/Dash'
import Balance from './pages/Balance'
import Transactions from './pages/Transactions'
import Auth from './components/Auth'
import AddAcc from './pages/addAcc'

function App() {

  return (
    <div className='h-screen '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Auth />}>
          <Route path='/dashboard/*' element={<Dashboard />}>
            <Route index element={<Dash />} />
            <Route path='balance/' element={<Balance />} />
            <Route path='balance/add' element={<AddAcc />} />
            <Route path='txn' element={<Transactions />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
