export abstract class FormValidation {
    static email(email: string): boolean {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const result = regex.test(email)
        return result
    }

    static registration(registration: string): boolean {
        const result = registration.length === 10
        return result 
    }
}