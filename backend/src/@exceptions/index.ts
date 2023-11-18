export class ApplicationException extends Error {
  statusCode: number;
  message: string;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    Object.setPrototypeOf(this, ApplicationException.prototype);
  }

}