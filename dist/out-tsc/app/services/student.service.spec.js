import { TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
describe('StudentService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(StudentService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=student.service.spec.js.map