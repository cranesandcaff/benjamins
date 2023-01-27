import { Injectable } from '@nestjs/common';
import { InterestCalculator } from './interest-calculator'

@Injectable()
export class InterestCalculatorService extends InterestCalculator {}


