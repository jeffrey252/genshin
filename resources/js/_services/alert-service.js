import { Subject } from 'rxjs';

const alertSubject = new Subject();

export const alertService = {
    sendAlert: alertMessage => alertSubject.next( alertMessage ),
    clearAlerts: () => alertSubject.next(),
    getAlert: () => alertSubject.asObservable()
};
