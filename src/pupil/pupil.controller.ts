import { Controller } from '@nestjs/common';
import { AccessControl } from 'src/Classes/AccessControl';
import { PupilService } from './pupil.service';

@Controller('pupil')
export class PupilController {
    constructor(private pupilService: PupilService) { }
}
 