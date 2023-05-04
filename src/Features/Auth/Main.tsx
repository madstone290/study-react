import { Content } from 'Features/Auth/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RequireAuth } from "Features/Auth/RequiredAuth";
import { BaseLayout } from "Features/Auth/BaseLayout";
import { Logout } from './Logout';
import { Login } from './Login';

export function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<RequireAuth><BaseLayout /></RequireAuth>}>
          {
           
          }
          <Route path='r1' element={<Content text='인증이 필요한 페이지1' />} />
          <Route path='r2' element={<Content text='인증이 필요한 페이지1' />} />
        </Route>

        <Route path="/" element={<Content text="no auth" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path='*' element={<div>not found</div>} />
      </Routes>
    </BrowserRouter >
  );
}
