import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';
describe('PortfolioService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PortfolioService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=portfolio.service.spec.js.map