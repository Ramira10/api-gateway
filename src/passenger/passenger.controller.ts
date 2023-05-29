import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { Observable } from 'rxjs';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerMSG } from 'src/common/constants';

@Controller('api/v2/passenger')
export class PassengerController {
    constructor(private readonly clientProxy: ClientProxySuperFlights) { }
    private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

    @Post()
    create(@Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.CREATE, passengerDTO);
    }

    @Get()
    findAll(): Observable<IPassenger[]> {
        return this._clientProxyPassenger.send(PassengerMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.UPDATE, { id, passengerDTO });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyPassenger.send(PassengerMSG.DELETE, id);
    }
}
