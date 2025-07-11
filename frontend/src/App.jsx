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
import AddAcc from './pages/AddAcc'
import Bills from './pages/Bills'
import Expenses from './pages/Expenses'
import Goals from './pages/Goals'
import Settings from './pages/Settings'

function App() {

  return (
    <div className=''>
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
            <Route path='bills' element={<Bills />} />
            <Route path='expenses' element={<Expenses />} />
            <Route path='goals' element={<Goals />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
