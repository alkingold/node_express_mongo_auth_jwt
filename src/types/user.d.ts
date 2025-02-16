export interface IUser {
	email: string;
	password: string;
	verified: boolean;
	verificationCode: Number | null;
	verificationCodeValidation: string | null;
	forgotPasswordCodeValidation: Number | null;
}
