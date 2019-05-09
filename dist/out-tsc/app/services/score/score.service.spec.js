import { TestBed } from '@angular/core/testing';
import { ScoreService } from './score.service';
describe('ScoreService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ScoreService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=score.service.spec.js.map