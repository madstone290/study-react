import { Outlet } from "react-router-dom";

export function BaseLayout() {
    return (
        <div>
            <p>레이아웃 헤더</p>
            <Outlet />
        </div>
    );
}