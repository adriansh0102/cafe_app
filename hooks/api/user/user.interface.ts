

export interface UserI {
    id:        string;
    name:      string;
    last_name: string;
    phone:     string;
    email:     string;
    username:  string;
    rol:       string;
    status:    boolean;
}

export interface createPropsUserI {
    name:      string;
    last_name: string;
    phone:     string;
    email:     string;
    username:  string;
    rol:       string;
}

export interface getUserI {
    status:  number;
    message: string;
    data:    UserI[];
}

export interface createUserI {
    status:  number;
    message: string;
    data:   {
        user: UserI [];
        token: string;
    } 
}