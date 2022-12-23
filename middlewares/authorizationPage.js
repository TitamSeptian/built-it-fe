import cookies from "next-cookies";

export function unAuthPageCostumer(ctx) {
    return new Promise((resolve) => {
        const allCookies = cookies(ctx);
        if (allCookies.access_token) {
            return ctx.res.writeHead(302, { Location: "/user" }).end();
        }
        return resolve("unauthorized");
    });
}

export function unAuthPageStore(ctx) {
    return new Promise((resolve) => {
        const allCookies = cookies(ctx);
        if (allCookies.access_token) {
            return ctx.res.writeHead(302, { Location: "/dashboard" }).end();
        }
        return resolve("unauthorized");
    });
}

export function authPage(ctx) {
    const allCookies = cookies(ctx);
    if (!allCookies.access_token) {
        return ctx.res.writeHead(302, { Location: "/login" }).end();
    }
    return resolve({
        access_token: allCookies.access_token,
    });
}
