export interface Auth0UserRequestObject {
    email: string;
    name: string;
}

export interface Auth0UserResponseObject {
    email: string;
    user_id: string;
    name: string;
    email_verified: boolean;
}

export interface Auth0UserJwtObject {
    sub: string;
}
