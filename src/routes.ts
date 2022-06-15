import { Router } from 'express'

import { AuthDeliverymanController } from './modules/account/authDeliveryman/useCases/AuthDeliverymanController'
import { AuthUserController } from './modules/account/authClient/useCases/AuthClientController'

import { CreateClientController } from './modules/clients/useCases/createClient/useCases/CreateClientController'
import { CreateDeliveriesController } from './modules/deliveries/useCases/createDeliveries/useCases/CreateDeliveriesController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/useCases/CreateDeliverymanController'

import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController'

import { ensureAuthClient } from './middlewares/ensureAuthClient'
import { ensureAuthDeliveryman } from './middlewares/ensureAuthDeliveryman'

import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/useCases/FindAllAvailableController'
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/useCases/FindAllDeliveriesController'
import { FindAllDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/useCases/FindAllDeliverymanController'
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/useCases/UpdateEndDateController'

const routes = Router()

const authUserController = new AuthUserController()
const authDeliverymanController = new AuthDeliverymanController()

const createClientController = new CreateClientController()
const createDeliveriesController = new CreateDeliveriesController()
const createDeliverymanController = new CreateDeliverymanController()

const updateDeliverymanController = new UpdateDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

const findAllAvailableController = new FindAllAvailableController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliverymanController = new FindAllDeliverymanController()

routes.post('/client', createClientController.handler)
routes.post('/deliveryman', createDeliverymanController.handler)
routes.post('/client/auth', authUserController.handler)
routes.post('/deliveryman/auth', authDeliverymanController.handler)
routes.post('/delivery', ensureAuthClient, createDeliveriesController.handler)

routes.put('/delivery/updateEndDate/:id', ensureAuthDeliveryman, updateEndDateController.handler)
routes.put('/delivery/updateDeliveryman/:id', ensureAuthDeliveryman, updateDeliverymanController.handler)

routes.get('/delivery/available', ensureAuthDeliveryman, findAllAvailableController.handler)
routes.get('/client/deliveries', ensureAuthClient, findAllDeliveriesController.handler)
routes.get('/deliveryman/deliveries', ensureAuthDeliveryman, findAllDeliverymanController.handler)

export { routes }