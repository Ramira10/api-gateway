import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';

@Module({
  imports: [ClientProxySuperFlights],
  controllers: [FlightController]
})
export class FlightModule { }
