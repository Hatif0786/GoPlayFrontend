import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-s0h1ybs6jx8kvhco.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: 'l8sqTAzZgQZJ2pTq75S1Dz5UDcxIH8AE',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
